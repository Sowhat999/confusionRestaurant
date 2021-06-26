import React from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';
    
    function RenderDish({dish}){
            return(
               
                   <Card>
                    <CardBody>
                     <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
               
            )
        }

    function RenderComments({comments}){
            const eachComment = comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                      <li>{comment.comment}<br/>
                      --{comment.author}, {new Intl.DateTimeFormat(
                          'en-US',
                          {year: 'numeric', month: 'short', day: '2-digit'}).format(
                              new Date(Date.parse(comment.date)))}
                      </li>
                      </ul>      

                    </div>
                )
            });
            return(
                <div>
                   <h4>Comments</h4>
                        
                        {eachComment}
                       
                </div>
            )
        }


    const DishDetail = (props) => {
          
        if(props.dish != null){
            return (
            <div className="container">
                <div className="row"> 
                <div className="col-12 col-md-5 m-1">                
                <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.dish.comments} />
                </div>  
                </div>
            </div>
        );
    }
    else return (<div className="container"></div>)
    
}

export default DishDetail;
