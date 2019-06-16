import React, { Component } from 'react';
import { Message, Modal, Segment, Grid, Card, Input, Sidebar, Menu, Icon, Image, Label, Container } from 'semantic-ui-react';
import './Dashboard.css';
import jane from '../images/jane.jpg';
import tantockbeng from '../images/tantockbeng.png';
import chuajianmeng from '../images/chuajianmeng.jpg';
import angsweeheng from '../images/angsweeheng.jpg';
import tanmoonheng from '../images/tanmoonheng.jpg';

class Main extends Component {

    state = {open: false}
    handleItemClick = name => this.setState({ activeItem: name })
    handleClose = () => this.setState({open: false})
    handleOpen = () => this.setState({open: true})

    renderCards() {
        const items = [
            {   
                header: 'Vacant',
                meta: '2 Floor',
                description: '',
            },
            {
                header: 'Vacant',
                meta: '3 Floor',
                description: ''
            },
            {
                header: 'Vacant',
                meta: '4 Floor',
                description: ''
            }
        ];

        return <Card.Group items={items} />;
    };


  render() {
    const { activeItem, open } = this.state; 
    return (
        <Container>
            <Grid columns={2}>
                <Sidebar as={Menu} vertical visible>
                    <Segment raised>
                        <Image src={jane} fluid centered/>
                        <Label attached='bottom' color='blue'>Jane</Label>
                    </Segment>
                    <Menu.Item>
                        <Icon name='window maximize' />
                        <Menu.Header>Dashboard</Menu.Header>                        
                        <Menu.Menu>
                            <Menu.Item
                            name='Block 1'
                            active={activeItem === 'Block 1'}
                            onClick={this.handleItemClick}
                            />
                            <Menu.Item
                            name='Block 2'
                            active={activeItem === 'Block 2'}
                            onClick={this.handleItemClick}
                            />
                            <Menu.Item
                            name='Block 3'
                            active={activeItem === 'Block 3'}
                            onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name='tasks' />
                        <Menu.Header>Weekly Tasks</Menu.Header>
                        <Menu.Menu>
                            <Menu.Item
                            name='Urgent'
                            active={activeItem === 'Urgent'}
                            onClick={this.handleItemClick}
                            />
                            <Menu.Item
                            name='Medium'
                            active={activeItem === 'Medium'}
                            onClick={this.handleItemClick}
                            />
                            <Menu.Item
                            name='Completed'
                            active={activeItem === 'Completed'}
                            onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name='chart bar' />
                        <Menu.Header>Analytics</Menu.Header>
                    </Menu.Item>
                </Sidebar>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={13}>
                    <Input fluid icon='search' iconPosition='left' placeholder='Search for resident' />
                    <Grid columns={4}>
                        <Modal onClose={this.handleClose} open={open}>
                            <Modal.Header className="name">                              
                                <Image src={tanmoonheng} avatar size='small' floated='left' />                          
                                <p>Tan Moon Heng, 85 years old, F</p>
                                <p><Icon name='home' />Bukit Merah Avenue 6, Blk 1, #01-04</p>
                                <p><Icon name='phone' />+65 6314 0987</p>
                                <p><Label color='red'>needs attention urgently</Label></p>                                
                            </Modal.Header>
                            <Modal.Content image>
                                <Modal.Description>
                                    <p>Family Details: David Tan Jia Jun, 32, Son</p>
                                    <p>Emergency Contact: +65 9123 0203 (HP)</p>
                                    <p>Race / Religion: Chinese/Buddhist</p>
                                    <p>Dietary Restrictions: Vegetarian</p>
                                    <p>Illness / Disabilities: Hypertension / NIL</p>
                                    <p>
                                        Engagement Notes
                                        <Message>
                                            <Message.Header>Darren Leong</Message.Header>
                                            <p>
                                                Mdm Tan is physically very weak and needs a lot of assistance moving around.<br />
                                                She has fallen down last week in the toilet and was unnoticed for 5 hours.
                                            </p>
                                        </Message>
                                    </p>
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                        <Grid.Row className="blocks" divided>
                            <Grid.Column>
                                <Label attached='top'>Unit # 01</Label>
                                <Card className="name ttb" image={tantockbeng} header='Tan Tock Beng, 75' meta='Blk 1, #01-01' description='Diabetic and hypertension' color='green'></Card>
                                {this.renderCards()}
                            </Grid.Column>
                            <Grid.Column>
                                <Label attached='top'>Unit # 02</Label>
                                <Card className="name cjm" image={chuajianmeng} header='Chua Jian Meng, 70' meta='Blk 1, #01-02' description='Wheelchair-bound' color='orange'></Card>
                                {this.renderCards()}
                            </Grid.Column>
                            <Grid.Column>
                                <Label attached='top'>Unit # 03</Label>
                                <Card className="name ash" image={angsweeheng} header='Ang Swee Heng, 80' meta='Blk 1, #01-03' description='Need help moving around' color='red'></Card>
                                {this.renderCards()}
                            </Grid.Column>
                            <Grid.Column>
                                <Label attached='top'>Unit # 04</Label>
                                <Card onClick={this.handleOpen} className="name tmh" image={tanmoonheng} header='Tan Moon Heng, 85' meta='Blk 1, #01-04' description='Physically very weak' color='red'></Card>
                                {this.renderCards()}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>      
                </Grid.Column>             
            </Grid>
        </Container>
    );
  };
}

export default Main;