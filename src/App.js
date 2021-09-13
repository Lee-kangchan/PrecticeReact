import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Customer from './components/Customer'

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
      <div className="gray-background">
        {
          customer.map(c => {
            return (
            <Customer 
              key={c.id}
              id={c.id} 
              img = {c.image} 
              name={c.name} 
              birthday = {c.birthday} 
              gender = {c.gender} 
              job = {c.job}
            />
            );
          })
        }
        
      </div>
    );
  }
}

export default App;
