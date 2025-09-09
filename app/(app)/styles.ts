// styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    position: 'absolute',
    bottom: 20, // Ajusta la distancia desde el fondo
    left: 20,   // Alinea el texto "Sign Out" a la izquierda
    fontSize: 16,
    color: '#FF3B30',
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
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '100%',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonSpacing: {
    marginBottom: 10, // Espacio entre botones
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  expensesListContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  expenseContainer: {
    flexDirection: 'row', // Coloca el ícono y el contenedor de texto en fila
    alignItems: 'center', // Centra verticalmente el contenido
    paddingVertical: 10, // Espacio interno arriba y abajo
  },
  expenseDetailsContainer: {
    flex: 1, // Permite que este contenedor ocupe el espacio restante
    flexDirection: 'row', // Alinea el texto y el monto en fila
    justifyContent: 'space-between', // Espacia el contenido
  },
  expenseText: {
    fontSize: 16,
    marginLeft: 10, // Espacio entre el ícono y el texto
  },
  amountText: {
    fontSize: 16,
    textAlign: 'right', // Alinea el texto a la derecha
  },
  icon: {
    marginRight: 10, // Añade un margen a la derecha del ícono
  },
  listSeparator: {
    height: 1,
    width: '100%', // Asegura que la línea ocupe todo el ancho
    backgroundColor: '#CED0CE',
    marginVertical: 5, // Añade espacio arriba y abajo del separador
  },
  payerText: {
    fontSize: 12, // Tamaño más pequeño para el texto de "Pagado por"
    color: 'gray', // Puedes ajustar el color según tu preferencia
    textAlign: 'right', // Alineado a la derecha
  },
  amountContainer: {
    alignItems: 'flex-end', // Alinea ambos textos (amount y paidBy) a la derecha
  },
  groupName: {
      fontSize: 18,
      fontWeight: 'bold',
  },
  totalsContainer: {
      marginTop: 5,
  },
  totalText: {
      fontSize: 14,
      color: '#666',
  },
  noTotalsText: {
      fontSize: 12,
      color: '#999',
  },
});
