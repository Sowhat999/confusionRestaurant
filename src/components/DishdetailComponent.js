import React from 'react';
import Comment from './CommentForm';
import { Card, CardText, CardImg, CardBody, CardTitle,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';    
    function RenderDish({dish}){
            return(
                <div className="col-12 col-md-5 m-1">  
                    <Card>
                        <CardBody>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                   </Card>
                </div>
               
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
                <div className="col-12 col-md-5 m-1">
                    <div>
                        <h4>Comments</h4>
                                
                                {eachComment}
                            
                    </div>
                    <div>
                        <Comment/>
                    </div>
                </div>
               
            )
        }


    const DishDetail = (props) => {
          
        if(props.dish != null){
            return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">                              
                    <RenderDish dish={props.dish} />           
                    <RenderComments comments={props.comments} /> 
                </div>
            </div>
        );
    }
    else return (<div className="container"></div>)
    
}

export default DishDetail;
