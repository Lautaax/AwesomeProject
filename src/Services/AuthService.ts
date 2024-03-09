import { User } from './types/User';

export const AuthService = {
  register: async (user: User) => {
    // Implementar lógica de registro de usuario
  },
  login: async (email: string, password: string) => {
    // Implementar lógica de inicio de sesión de usuario
  },
  logout: () => {
    // Implementar lógica de cierre de sesión de usuario
  },
};