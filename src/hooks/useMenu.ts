
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { businessConfig } from "@/config/business";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isAvailable: boolean;
  tags?: string[];
}

export const useMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "menuItems"), orderBy("name", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        // Fallback to static config if DB is empty
        setMenuItems(businessConfig.menu as MenuItem[]);
      } else {
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as MenuItem[];
        setMenuItems(items);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching menu items:", error);
      setMenuItems(businessConfig.menu as MenuItem[]);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return { menuItems, categories, loading };
};
