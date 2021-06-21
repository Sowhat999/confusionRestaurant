import React, { Component } from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedDish: this.props.selectedDish
        };
        console.log('Menu Component constructor is invoked');
    }

    componentDidMount(){
        console.log('Menu Component componentDidMount is invoked');
    }
    
    renderDish(dish){
        if(dish != null){
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
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){
        if(dish != null){
            const comments = dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                      <li>{comment.comment}<br/>
                      --{comment.author}, {comment.date}
                      </li>
                      </ul>      

                    </div>
                )
            });
            return(
                <div>
                   <h4>Comments</h4>
                        
                        {comments}
                       
                </div>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }
    render(){
          
        console.log('Menu Component render is invoked');
        if(this.props.selectedDish == null){
            return (<div></div>)
        }
        else
        return (

            <div className="container">
                <div className="row"> 
                <div className="col-12 col-md-5 m-1">                
                {this.renderDish(this.state.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.state.selectedDish)}
                </div>  
                </div>
            </div>
        );
    }
}

export default DishDetail;
