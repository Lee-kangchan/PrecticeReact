import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Customer from './components/Customer'

import Papar from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles'; // style불러오는 것
import { classes } from 'istanbul-lib-coverage';

const styles = theme => ({
  root: {
    width : '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})
const customer = [
  {'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : "홍길동",
  'birthday' : '960753',
  'gender' : 'man',
  'job' : 'job'
  },
  {'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : "길동이",
  'birthday' : '960743',
  'gender' : 'man',
  'job' : '대학생'
  },
  {'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : "찬이",
  'birthday' : '910753',
  'gender' : 'woman',
  'job' : '고등학생'
  }

]

class App extends Component{

  render(){
    return (
      <Papar className ={classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableCell> 번호</TableCell>
            <TableCell> 이미지</TableCell>
            <TableCell> 이름</TableCell>
            <TableCell> 생일</TableCell>
            <TableCell> 젠더</TableCell>
            <TableCell> 직업</TableCell>
          </TableHead>
          <TableBody>
            { customer.map(c => { return ( <Customer key={c.id} id={c.id} img = {c.image} name={c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/> ); }) }
          </TableBody>
        </Table>
      </Papar>
    );
  }
}

export default withStyles(styles)(App);
