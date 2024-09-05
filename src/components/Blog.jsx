import React from 'react'
import {com} from '../assets'
import { views } from '../assets'
import { arrow } from '../assets'
import { red } from '../assets'
import {hug} from '../assets'

const Blog = () => {
  return (
   <>
                  
         <div className="row">   
               <div className='col-sm-12 col-md-12 col-lg-1'></div>
               <div className='col-sm-12 col-md-12 col-lg-10'>
                 <div className="row" style={{ marginTop:'20rem', gap:'7rem',marginBottom:'' }}>
                    <div className='section-1' >
                        <img src={com} alt="" style={{ marginBottom:'7rem'}}/>
                    </div>
                     <div className='' style={{marginLeft:'-5rem'}}>
                         <h3 >Fashion trend forecast for  Summer 2021</h3>
                         <p className='' style={{marginTop:'5rem'  }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint.
                         Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat
                          sunt nostrud ametAmet minim mollit non deserunt ullamco <br /> est sit aliqua dolor 
                          do amet sint. Velit officia consequat duis enim velit <br /> mollit. Exercitation veniam
                           consequat sunt nostrud amet..</p>
                            <div>
                            <button className="btn"style={{backgroundColor:'white', border:'1px solid black',marginTop:'2.5rem'  }} >
                              Read More <img src={arrow} alt="" />
                            </button>
                            </div>
                            <img src={views} alt="" style={{marginTop:'2.7rem'  }} />
                            <div className="" style={{ display:'flex',gap:'10px' }}>
                           <h5 className="" style={{ }}>Wade Warren</h5>
                           <p className=""style={{  }} >Fashion Designer</p>
                           </div>
                      </div>
                     </div>
                    </div>
                         <div className='col-sm-12 col-md-12 col-lg-1'></div>
                          <div className='col-sm-12 col-md-12 col-lg-1'></div>
                     <div className='col-sm-12 col-md-12 col-lg-10'>
                      <div className='row' style={{marginTop:'16rem', gap:'7rem' }}>
                              <div className='section-two'style={{marginBottom:''}} >
                                        <h3 >Fashion trend forecast for  Summer 2021</h3>
                                       <p className='' style={{marginTop:'3.4rem'  }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint.
                                        Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat
                                        sunt nostrud ametAmet minim mollit non deserunt ullamco <br /> est sit aliqua dolor 
                                        do amet sint. Velit officia consequat duis enim velit <br /> mollit. Exercitation veniam
                                        consequat sunt nostrud amet..</p>
                                   <div>
                                      <button className="btn"style={{backgroundColor:'white', border:'1px solid black', marginTop:'2.5rem'  }} >
                                       Read More <img src={arrow} alt="" />
                                      </button>
                                  </div>
                                  <img src={views} alt="" style={{marginTop:'2.5rem'  }} />
                                 <div className="" style={{ display:'flex',gap:'10px' }}>
                                       <h5 className="" style={{ }}>Wade Warren</h5>
                                      <p className=""style={{  }} >Fashion Designer</p>
                               </div>
                             </div>
                             <div>
                                  <img src={red} alt="" />
                            </div>
                        </div>
                 </div>
                 <div className='col-sm-12 col-md-12 col-lg-1'></div>
                 </div>
                 <div className="row">
                  <div className='col-sm-12 col-md-12 col-lg-1'></div>
                   <div className='col-sm-12 col-md-12 col-lg-10'>
                      <div className="row" style={{marginTop:'10rem', display:'flex', gap:'8rem' }} >
                         <div className='sec-1'>
                              <img src={hug} alt="" style={{ marginTop:'10rem'}} />
                             </div>

                               <div className='sec-2' style={{ marginTop:'10rem'}}>
                                   <h3 >Fashion trend forecast for  Summer 2021</h3>
                                    <p className='' style={{marginTop:'4.4rem'  }}>Amet minim mollit non deserunt ullamco est sit
                                         aliqua dolor do amet <br /> sint.
                                    Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat
                                    sunt nostrud ametAmet minim mollit non deserunt ullamco <br /> est sit aliqua dolor 
                                    do amet sint. Velit officia consequat duis enim velit <br /> mollit. Exercitation veniam
                                    consequat sunt nostrud amet..</p>
                                    <div>
                                     <button className="btn"style={{backgroundColor:'white', border:'1px solid black', marginTop:'2.5rem'  }} >
                                       Read More <img src={arrow} alt="" />
                                     </button>
                                   </div>
                                     <img src={views} alt="" style={{marginTop:'2.5rem'  }} />
                                   <div className="" style={{ display:'flex',gap:'10px' }}>
                                       <h5 className="" style={{ }}>Wade Warren</h5>
                                       <p className=""style={{  }} >Fashion Designer</p>
                                  </div>
                          </div>
                       </div>
                    </div>
                  <div className='col-sm-12 col-md-12 col-lg-1'></div>
              <div className='col-sm-12 col-md-12 col-lg-1'></div>
          </div>
        <div/>
    </>
  )
}

export default Blog
