import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'
import './AddConference.css'
import Add from "../../assets/Images/Conference.svg";

// import Footer from './Footer';



function AddConference() {
    return (
        <>
            <section className="addconf">
				<Container>
					<Row>
						<Col md={6}>
                             <div className="page"></div>
                
    
                    <div className="cont_1">
    
                        <h2 className='addconference'>Add Conference</h2>
                        <spa>________________</spa>
    
                    <form action="">
                            <input type="text" className='cn' placeholder="Conferance name" /><br />
                            <input type="text" className='cn' placeholder="A valid and working URL" /><br />
                            <div className="footer">
    
    
                                <div className="left">
                                    <select name="cars" id="cars">
                                        <option value="Topic" >Topic</option>
                                        <option value="Polkadot">Polkadot</option>
                                        <option value="Kusama">Kusama</option>
                                        <option value="Bitcoin">Bitcoin</option>
                                    </select>
                                    <br />
                                    <input type="date" placeholder="Start Date" />
                                    <input type="text" placeholder="CPF  URL" />
                                    <input type="text" placeholder="Conference Twitter handle" />
    
    
    
                                </div>
                                <div className="right">
                                    <select name="cars" id="cars">
                                        <option value="volvo">Location</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <input type="date" placeholder="Start Date" />
                                    <input type="date" placeholder="CPF  URL" />
                                    <input type="text" placeholder="Code of conduct URL" />
                                </div>
                            </div>
                            <br></br>
                            
                            <div >
                            <Button className='addbtn'>Add Conference</Button>
                            </div>
                        </form>
                    </div>
					
						</Col>
						<Col md={6}>
                        <img className='AddCon' src={Add} alt=""   />
						</Col>
					</Row>
				</Container>

			</section>

            {/* <Footer/> */}

        </>
    )    
}

export default AddConference;
