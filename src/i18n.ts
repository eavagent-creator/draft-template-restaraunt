
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            menu: "Menu",
            faq: "FAQs",
            contact: "Contact",
            signIn: "Sign In",
            dashboard: "Dashboard",
            viewSite: "View Site",
            logout: "Logout",
            navigation: "Navigation"
          },
          hero: {
            title: "Coastal Flavors, Bridgeport Hearts.",
            subtitle: "Authentic coastal flavors and hearty comfort food in the heart of Bridgeport, CT. Family-owned and operated since 2015.",
            orderNow: "Order Now",
            viewMenu: "View Menu"
          },
          menu: {
            title: "Our Menu",
            subtitle: "Hand-crafted with local ingredients and a pinch of Bridgeport soul.",
            categories: {
              all: "All",
              seafood: "Seafood",
              pasta: "Pasta",
              salads: "Salads",
              soups: "Soups",
              appetizers: "Appetizers",
              desserts: "Desserts"
            },
            items: {
              "1": {
                name: "Harbor Lobster Roll",
                description: "Fresh Atlantic lobster, lightly buttered on a toasted brioche bun. Served with slaw."
              },
              "2": {
                name: "St. Mary's Seafood Pasta",
                description: "Shrimp, scallops, and clams in a spicy garlic marinara over linguine."
              },
              "3": {
                name: "Seaside Garden Salad",
                description: "Mixed greens, cherry tomatoes, cucumbers, and balsamic vinaigrette."
              },
              "4": {
                name: "New England Clam Chowder",
                description: "Creamy chowder with local clams, potatoes, and thick-cut bacon."
              },
              "5": {
                name: "Calamari Fritti",
                description: "Crispy fried squid rings served with a spicy marinara and lemon wedge."
              },
              "6": {
                name: "Grilled Swordfish",
                description: "Center-cut swordfish steak, grilled with lemon herb butter and roasted asparagus."
              },
              "7": {
                name: "Chicken Parmigiana",
                description: "Breaded chicken breast, melted mozzarella, and marinara over spaghetti."
              },
              "8": {
                name: "Tiramisu",
                description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone."
              }
            },
            addToCart: "Add to Basket",
            available: "Available",
            unavailable: "Unavailable"
          },
          cart: {
            title: "Your Order",
            empty: "Your basket is hungry!",
            emptySub: "Add items from the menu to start your order.",
            subtotal: "Subtotal",
            deliveryFee: "Delivery Fee",
            total: "Total",
            checkout: "Review & Checkout"
          },
          faq: {
            title: "Everything You Need to Know",
            questions: {
              q1: "Do you deliver to all of Bridgeport?",
              a1: "Yes! We deliver within a 5-mile radius of our downtown location, covering most of Bridgeport and parts of Fairfield.",
              q2: "Can I customize my order?",
              a2: "Absolutely. You can add notes to any item in your cart during checkout. We'll do our best to accommodate allergies and preferences.",
              q3: "What are your peak hours?",
              a3: "We are usually busiest on Friday and Saturday nights between 6:00 PM and 8:00 PM. We recommend ordering early for faster delivery!"
            }
          },
          footer: {
            about: "About Us",
            quickLinks: "Quick Links",
            location: "Location",
            hours: "Hours",
            rights: "All rights reserved."
          },
          checkout: {
            title: "Complete Your Order",
            confirmed: "Order Confirmed!",
            thanks: "Thank you for your order!",
            received: "We've received your request.",
            willArrive: "It should arrive in {{time}}.",
            willBeReady: "It will be ready for pickup in {{time}}.",
            pickup: "Pickup",
            delivery: "Delivery",
            fullName: "Full Name",
            phoneNumber: "Phone Number",
            emailAddress: "Email Address",
            deliveryAddress: "Delivery Address",
            notes: "Order Notes (Optional)",
            placeholderNotes: "Allergies, door codes, or special instructions...",
            grandTotal: "Grand Total",
            placeOrder: "Place {{type}} Order",
            successToast: "Order received! Check your email for confirmation.",
            errorToast: "Failed to place order. Please try again."
          }
        }
      },
      es: {
        translation: {
          nav: {
            menu: "Menú",
            faq: "Preguntas",
            contact: "Contacto",
            signIn: "Iniciar Sesión",
            dashboard: "Panel",
            viewSite: "Ver Sitio",
            logout: "Cerrar Sesión",
            navigation: "Navegación"
          },
          hero: {
            title: "Sabores Costeros, Corazones de Bridgeport.",
            subtitle: "Sabores costeros auténticos y comida reconfortante en el corazón de Bridgeport, CT. Propiedad y gestión familiar desde 2015.",
            orderNow: "Pedir Ahora",
            viewMenu: "Ver Menú"
          },
          menu: {
            title: "Nuestro Menú",
            subtitle: "Elaborado a mano con ingredientes locales y una pizca de alma de Bridgeport.",
            categories: {
              all: "Todo",
              seafood: "Mariscos",
              pasta: "Pasta",
              salads: "Ensaladas",
              soups: "Sopas",
              appetizers: "Entradas",
              desserts: "Postres"
            },
            items: {
              "1": {
                name: "Rollo de Langosta Harbor",
                description: "Langosta fresca del Atlántico, ligeramente enmantequillada en un pan brioche tostado. Servido con ensalada de col."
              },
              "2": {
                name: "Pasta de Mariscos St. Mary's",
                description: "Camarones, vieiras y almejas en una salsa marinara picante con ajo sobre linguine."
              },
              "3": {
                name: "Ensalada de Jardín Seaside",
                description: "Lechugas mixtas, tomates cherry, pepinos y vinagreta balsámica."
              },
              "4": {
                name: "Crema de Almejas New England",
                description: "Crema cremosa con almejas locales, papas y tocino de corte grueso."
              },
              "5": {
                name: "Calamares Fritos",
                description: "Anillos de calamar fritos crujientes servidos con salsa marinara picante y una rodaja de limón."
              },
              "6": {
                name: "Pez Espada a la Parrilla",
                description: "Filete de pez espada cortado al centro, a la parrilla con mantequilla de hierbas al limón y espárragos asados."
              },
              "7": {
                name: "Pollo a la Parmesana",
                description: "Pechuga de pollo empanizada, mozzarella derretida y salsa marinara sobre espaguetis."
              },
              "8": {
                name: "Tiramisú",
                description: "Postre italiano clásico con soletillas empapadas en café y mascarpone."
              }
            },
            addToCart: "Añadir a la Canasta",
            available: "Disponible",
            unavailable: "No disponible"
          },
          cart: {
            title: "Tu Pedido",
            empty: "¡Tu canasta tiene hambre!",
            emptySub: "Añade artículos del menú para comenzar tu pedido.",
            subtotal: "Subtotal",
            deliveryFee: "Costo de Envío",
            total: "Total",
            checkout: "Revisar y Pagar"
          },
          faq: {
            title: "Todo lo que necesitas saber",
            questions: {
              q1: "¿Reparten en todo Bridgeport?",
              a1: "¡Sí! Repartimos en un radio de 5 millas de nuestra ubicación en el centro, cubriendo la mayor parte de Bridgeport y partes de Fairfield.",
              q2: "¿Puedo personalizar mi pedido?",
              a2: "Absolutamente. Puedes añadir notas a cualquier artículo en tu carrito durante el pago. Haremos todo lo posible para adaptarnos a alergias y preferencias.",
              q3: "¿Cuáles son sus horas pico?",
              a3: "Normalmente estamos más ocupados los viernes y sábados por la noche entre las 6:00 PM y las 8:00 PM. ¡Recomendamos pedir temprano para una entrega más rápida!"
            }
          },
          footer: {
            about: "Sobre Nosotros",
            quickLinks: "Enlaces Rápidos",
            location: "Ubicación",
            hours: "Horario",
            rights: "Todos los derechos reservados."
          },
          checkout: {
            title: "Completa tu Pedido",
            confirmed: "¡Pedido Confirmado!",
            thanks: "¡Gracias por tu pedido!",
            received: "Hemos recibido tu solicitud.",
            willArrive: "Debería llegar en {{time}}.",
            willBeReady: "Estará listo para recoger en {{time}}.",
            pickup: "Recoger",
            delivery: "Domicilio",
            fullName: "Nombre Completo",
            phoneNumber: "Número de Teléfono",
            emailAddress: "Correo Electrónico",
            deliveryAddress: "Dirección de Entrega",
            notes: "Notas del Pedido (Opcional)",
            placeholderNotes: "Alergias, códigos de puerta o instrucciones especiales...",
            grandTotal: "Total General",
            placeOrder: "Realizar Pedido de {{type}}",
            successToast: "¡Pedido recibido! Revisa tu correo para la confirmación.",
            errorToast: "Error al realizar el pedido. Por favor, inténtalo de nuevo."
          }
        }
      },
      pt: {
        translation: {
          nav: {
            menu: "Menu",
            faq: "Perguntas",
            contact: "Contato",
            signIn: "Entrar",
            dashboard: "Painel",
            viewSite: "Ver Site",
            logout: "Sair",
            navigation: "Navegação"
          },
          hero: {
            title: "Sabores Costeiros, Corações de Bridgeport.",
            subtitle: "Sabores costeiros autênticos e comida caseira no coração de Bridgeport, CT. Empresa familiar operada desde 2015.",
            orderNow: "Pedir Agora",
            viewMenu: "Ver Menu"
          },
          menu: {
            title: "Nosso Menu",
            subtitle: "Feito à mão com ingredientes locais e uma pitada de alma de Bridgeport.",
            categories: {
              all: "Tudo",
              seafood: "Frutos do Mar",
              pasta: "Massas",
              salads: "Saladas",
              soups: "Sopas",
              appetizers: "Entradas",
              desserts: "Sobremesas"
            },
            items: {
              "1": {
                name: "Roll de Lagosta Harbor",
                description: "Lagosta fresca do Atlântico, levemente amanteigada num pão brioche torrado. Servido com salada de repolho."
              },
              "2": {
                name: "Massa de Frutos do Mar St. Mary's",
                description: "Camarão, vieiras e amêijoas num molho marinara de alho picante sobre linguine."
              },
              "3": {
                name: "Salada de Jardim Seaside",
                description: "Folhas mistas, tomate cereja, pepino e vinagrete balsâmico."
              },
              "4": {
                name: "Sopa de Amêijoas New England",
                description: "Sopa cremosa com amêijoas locais, batatas e bacon de corte grosso."
              },
              "5": {
                name: "Lula Frita",
                description: "Anéis de lula fritos crocantes servidos com molho marinara picante e uma fatia de limão."
              },
              "6": {
                name: "Espadarte Grelhado",
                description: "Filé de espadarte cortado ao centro, grelhado com manteiga de limão e ervas e aspargos assados."
              },
              "7": {
                name: "Frango à Parmegiana",
                description: "Peito de frango empanado, mussarela derretida e molho marinara sobre espaguete."
              },
              "8": {
                name: "Tiramisu",
                description: "Sobremesa italiana clássica com biscoitos embebidos em café e mascarpone."
              }
            },
            addToCart: "Adicionar ao Cesto",
            available: "Disponível",
            unavailable: "Indisponível"
          },
          cart: {
            title: "Seu Pedido",
            empty: "Seu cesto está com fome!",
            emptySub: "Adicione itens do menu para começar seu pedido.",
            subtotal: "Subtotal",
            deliveryFee: "Taxa de Entrega",
            total: "Total",
            checkout: "Revisar e Finalizar"
          },
          faq: {
            title: "Tudo o que você precisa saber",
            questions: {
              q1: "Vocês entregam em toda Bridgeport?",
              a1: "Sim! Entregamos num raio de 5 milhas da nossa localização no centro, cobrindo a maior parte de Bridgeport e partes de Fairfield.",
              q2: "Posso personalizar meu pedido?",
              a2: "Com certeza. Você pode adicionar notas a qualquer item no seu carrinho durante a finalização. Faremos o nosso melhor para acomodar alergias e preferências.",
              q3: "Quais são seus horários de pico?",
              a3: "Costumamos estar mais ocupados nas noites de sexta e sábado, entre as 18:00 e as 20:00. Recomendamos pedir cedo para uma entrega mais rápida!"
            }
          },
          footer: {
            about: "Sobre Nós",
            quickLinks: "Links Rápidos",
            location: "Localização",
            hours: "Horário",
            rights: "Todos os direitos reservados."
          },
          checkout: {
            title: "Finalize seu Pedido",
            confirmed: "Pedido Confirmado!",
            thanks: "Obrigado pelo seu pedido!",
            received: "Recebemos sua solicitação.",
            willArrive: "Deve chegar em {{time}}.",
            willBeReady: "Estará pronto para retirada em {{time}}.",
            pickup: "Retirada",
            delivery: "Entrega",
            fullName: "Nome Completo",
            phoneNumber: "Número de Telefone",
            emailAddress: "E-mail",
            deliveryAddress: "Endereço de Entrega",
            notes: "Notas do Pedido (Opcional)",
            placeholderNotes: "Alergias, códigos de porta ou instruções especiais...",
            grandTotal: "Total Geral",
            placeOrder: "Fazer Pedido de {{type}}",
            successToast: "Pedido recebido! Verifique seu e-mail para confirmação.",
            errorToast: "Falha ao fazer o pedido. Por favor, tente novamente."
          }
        }
      }
    }
  });

export default i18n;
