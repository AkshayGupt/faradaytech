import React,{Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Menu, Icon,Label,Button,Input,Dropdown,Image, MenuItem, Grid, GridColumn,Responsive} from 'semantic-ui-react';

//Sample data starts here
const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      Button:'add friend',
      image: { avatar: true, src: '/images/sampleprof3.jfif' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      Button:'add friend',
      image: { avatar: true, src: '/images/sampleprof1.jfif' },
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
      Button:'add friend',
      image: { avatar: true, src: '/images/sampleprof2.jfif' },
    },
  ]
const notifications = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess has commented on your photo',
      value: 'Jenny Hess',
      Button:'add friend',
      image: { avatar: true, src: '/images/sampleprof3.jfif' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu has liked your comment',
      value: 'Elliot Fu',
      Button:'add friend',
      image: { avatar: true, src: '/images/sampleprof1.jfif' },
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano send you a friend request',
      value: 'Stevie Feliciano',
      Button:'add friend',
      image: { avatar: true, src: '/images/sampleprof2.jfif' },
    },
  ]
const pages = [
    {
      key: 'Born to Ride',
      text: 'Born to Ride',
      value: 'Jenny Hess',
    
      image: { avatar: true, src: '/images/bike1.jfif' },
    },
    {
      key: 'bikers hub',
      text: 'bikers hub',
      value: 'Elliot Fu',
      Button:'add friend',
      image: { avatar: true, src: '/images/bike2.jfif' },
    },
    {
      key: 'Manage pages',
      text: 'Manage Pages'
    
    },
    {

      key: 'Delete pages',
      text: 'Delete Pages'
    },
    {
      key: 'Advertising',
      text: 'Advertising '
    
    },
    
   
   
  ]

  // sample data end here!

class Header extends Component{
    constructor(props){
        super(props);
    }

   
    render(){
       
    
        return(

            <div>
             
            <Grid relaxed>
              
              <Grid.Row>
                <Grid.Column width={ 2}>

                </Grid.Column>
                <Grid.Column width={12}>
                         
            <Menu secondary >
            
            <Menu.Item header><Image src="images/icon1.jpg" style={{width:3+"em"}&&{height:4+"em"}}/></Menu.Item>
           
           
            <Menu.Item>
            <Input className='icon' icon='search' placeholder='Search...' style={{width:20+"em"}}/>
            </Menu.Item>
          
          
                <Menu.Item >
                   <Button basic> Home</Button>
                </Menu.Item>
               
                <Menu.Item>
                    <Button className=""> <Icon name="user"/> John </Button>
                
                </Menu.Item>
               
            <Menu.Item>
            <Dropdown icon="large user">
            <Dropdown.Menu>
            <Dropdown.Header content='Pending Friend Requests' />
            {friendOptions.map((option) => (
                <div className="inline">
                <Dropdown.Item key={option.value} {...option}  />
                <Button as="a">Add Friend</Button>
                </div>
             ))}
            </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
            
            <Menu.Item >
            <Dropdown icon="large bell">
            <Dropdown.Menu>
            <Dropdown.Header content='Notifications' />
            {notifications.map((option) => (
                <div className="inline">
                <Dropdown.Item key={option.value} {...option}  />
                </div>
             ))}
            </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
            <Menu.Item>
            <Dropdown  text=" Create" floating labeled button>
            <Dropdown.Menu > 
            <Dropdown.Header content='Create' />
            
                <Dropdown.Item>Page</Dropdown.Item>
                <Dropdown.Item>Add</Dropdown.Item>
                <Dropdown.Item>Group</Dropdown.Item>
                <Dropdown.Item>Event</Dropdown.Item>
            
            </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
            <Menu.Item>
            <Dropdown  icon="  question circle outline">
            <Dropdown.Menu > 
            <Dropdown.Header content='Help' />
            
                <Dropdown.Item>Adding Stories</Dropdown.Item>
                <Dropdown.Item>Privacy </Dropdown.Item>
                <Dropdown.Item>Account info</Dropdown.Item>
                <Dropdown.Item>Activity Log</Dropdown.Item>
            
            </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
            <Menu.Item position="left">
            <Dropdown icon="dropdown" >
            <Dropdown.Menu>
            <Dropdown.Header content='Your Pages' />
            {pages.map((option) => (
                <div className="inline">
                <Dropdown.Item key={option.value} {...option}  />
                
                </div>
                
             ))}
             
             
            </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
            
                 
            </Menu>
                </Grid.Column>
                <Grid.Column width={2}>

                </Grid.Column>
              </Grid.Row>
              
            </Grid>            
            </div>
            
            
        );
    }
}

export default Header;