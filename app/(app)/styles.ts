// styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
  },
  link: {
    fontSize: 16,
    color: '#007bff',
  },
  separator: {
    height: 10, // Espaciado entre elementos
  },
  signOutText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro para el modal
  },
  modalContainer: {
    width: '80%', // Ajusta el ancho del modal
    maxHeight: '50%', // Limita la altura del modal para que no ocupe toda la pantalla
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30, // Ajusta la posición del botón desde el fondo
    right: 30,  // Ajusta la posición desde la derecha
    backgroundColor: '#2196F3', // Color de fondo del botón
    borderRadius: 30, // Hace el botón más ovalado en lugar de circular
    paddingHorizontal: 25, // Ajusta el ancho del botón
    paddingVertical: 15, // Ajusta la altura del botón
    flexDirection: 'row', // Para alinear el ícono y el texto horizontalmente
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra para el botón (solo en Android)
  },
  buttonContent: {
    flexDirection: 'row', // Alinea ícono y texto
    alignItems: 'center', // Centra el contenido
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10, // Espacio entre el ícono y el texto
  },
});
