// styles.ts
import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  // General Layout Styles
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: 24,
    textAlign: 'center',
  },
  separator: {
    height: 16,
  },

  // Card and Link Styles
  card: {
    backgroundColor: Colors.light.cardBackground,
    padding: 20,
    borderRadius: 16,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    width: '100%',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  link: {
    fontSize: 16,
    color: Colors.light.tint,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },

  // Modal Styles
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
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Button Styles
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: Colors.light.tint,
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
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
  buttonSpacing: {
    marginBottom: 10, // Espacio entre botones
  },

  // Input Styles
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

  // Expense List Styles
  expensesListContainer: {
    flex: 1,
    padding: 20,
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

  // Group Styles
  groupName: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: 8,
  },
  totalsContainer: {
    marginTop: 5,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.light.icon,
  },
  noTotalsText: {
    fontSize: 12,
    color: '#999',
  },

  // Sign Out Style
  signOutText: {
    position: 'absolute',
    bottom: 20, // Ajusta la distancia desde el fondo
    left: 20,   // Alinea el texto "Sign Out" a la izquierda
    fontSize: 16,
    color: '#FF3B30',
  },

  // Component Styles
  // Collapsible
  collapsibleHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  collapsibleContent: {
    marginTop: 6,
    marginLeft: 24,
  },

  // ParallaxScrollView
  parallaxContainer: {
    flex: 1,
  },
  parallaxHeader: {
    height: 250,
    overflow: 'hidden',
  },
  parallaxContent: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },

  // ThemedText
  themedDefault: {
    fontSize: 16,
    lineHeight: 24,
  },
  themedDefaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  themedTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  themedSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  themedLink: {
    lineHeight: 30,
    fontSize: 16,
    color: Colors.light.tint,
  },

  // HelloWave
  waveText: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
