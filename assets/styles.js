import { StyleSheet } from 'react-native'

export const BLUE = '#60BADA'

export const screenOptions = {
  headerStyle: {
    backgroundColor: BLUE,
  },
  headerTintColor: '#F2F4F7',
}

export default StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  header: {
    fontWeight: 'bold',
  },
  subheader: {
    paddingTop: 10,
  },
})