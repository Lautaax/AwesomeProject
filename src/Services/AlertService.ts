import { Alert } from './types/Alert';

export const AlertService = {
  create: async (alert: Alert) => {
    // Implementar lógica de creación de alerta
  },
  getNearbyAlerts: async (location: { latitude: number; longitude: number }) => {
    // Implementar lógica de obtención de alertas cercanas
  },
};