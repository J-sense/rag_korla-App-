import React, { createContext, useState, useContext } from "react";

// Context-এর টাইপ ডিফাইন করা
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // সাইন ইন করার ফাংশন
  const login = () => setIsAuthenticated(true);

  // সাইন আউট করার ফাংশન (ভবিষ্যতের জন্য)
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// কাস্টম হুক যাতে যেকোনো পেজ থেকে সহজে এক্সেস করা যায়
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
