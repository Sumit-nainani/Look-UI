import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  enterText: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    color: COLORS.colorBl,
  },
  textInputBg: {
    width: '100%',
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'background: rgba(219, 219, 219, 1)',
    marginVertical: 16,
    justifyContent:'center'
  },
  enabledTouchableViewBg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.colorBl,
    marginVertical: 10,
},
enabledNextText: {
    fontSize: 18,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 1)'
},
disabledTouchableViewBg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'background: rgba(107, 107, 107, 1)',
    marginVertical: 10,
},
disabledNextText: {
    fontSize: 18,
    lineHeight: 20,
    color: 'background: rgba(197, 197, 197, 1)'
},
container1: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
},
input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    backgroundColor: '#f5f5f5',
},
inputText: {
    fontSize: 16,
    color: '#333',
},
modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
},
modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal:10
},
closeIcon: {
    width: 20,
    height: 20,
},
modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color:COLORS.colorBl
},
option: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems:'center'
},
optionText: {
    fontSize: 16,
    color: '#333',
},
rowFlex:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:10
},
flexOne:{
    flex:1,
    alignItems:'center'
}
});

export default styles;
