import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomsheet: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  col: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
  },
  rowing: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingRight: 13,
    paddingLeft: 13,
  },
  lastrowing: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingRight: 13,
    paddingLeft: 13,
    marginTop: 20,
    marginBottom: 10,
  },
  ltprow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  plprow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 1,
    borderRadius: 0,
    width: 450,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mainheading: {
    fontSize: 18,
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  uparrow: {
    fontSize: 15,
    fontWeight: '100',
    color: '#6200ee',
  },
  ltptext: {
    fontSize: 14,
    fontWeight: '300',
    paddingRight: 5,
  },
  ltpvalue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    padding: 5,
    marginBottom: 10,
  },
  header: {
    width: '100%',
    backgroundColor: '#6200ee',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 0,
    padding: 10,
  },
  headerText: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: '200',
  },
});
