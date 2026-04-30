# Security Specification - DineDash BPT Template

## Data Invariants
- An order must have a valid name, email, and phone.
- If type is 'delivery', an address must be provided (checked in app, but rules should ideally enforce or at least validate schema).
- `createdAt` and `updatedAt` must be server timestamps.
- Status must follow a specific set of strings.
- Only the creator (if authenticated) or an admin can see the order.
- Orders are immutable once placed, except for status updates by admins.

## The Dirty Dozen Payloads
1. **The Spoof**: Create an order with someone else's `customerId`.
2. **The Price Hack**: Create an order with `total: 0.01` regardless of items.
3. **The Ghost Field**: Add `isVerified: true` to an order.
4. **The Status Jump**: Update order status to 'delivered' as a guest.
5. **The Data Wipe**: Delete recent orders.
6. **The Big ID**: Try to create an order with an ID that is 1MB of text.
7. **The Negative Price**: Subtotal = -100.
8. **The System Overload**: Send 10,000 items in the `items` array.
9. **The Admin Impersonator**: Try to update the `admins` collection.
10. **The PII Leak**: List all orders as a random user.
11. **The Time Travel**: Set `createdAt` to a date in 2030.
12. **The Shadow Update**: Update `total` after creation.

## Proposed Rules Logic
- `isValidOrder` helper to check schema.
- `create` allowed for anyone (guests included for quick checkout, or mandatory login?). High-conversion usually supports guest checkout. If guest, we identify by email/phone.
- `update` restricted to admins only (for status changes).
- `delete` denied.
- `list` restricted to admins or matching `customerEmail`.
