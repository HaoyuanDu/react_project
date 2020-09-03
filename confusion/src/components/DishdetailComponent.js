import{ Component } from 'react';
import * as React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import moment from 'moment';

class DishDetail extends Component{
  
    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width ="100%" src={dish.image} alt={dish.name}/> 
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }else{
            return(<div></div>)
        }
    }

    renderComments(comments){
        
        if(comments!=null){
            const commentsList = comments.map((comments) => {
            moment.locale('en');
            return(
                <li>
                    <p>{comments.comment}</p>
                    <p>--{comments.author},  {moment(comments.date).format('MMM DD, YYYY')}
                    </p>
                </li>
                );    
            });

            return(
                <ul className="list-unstyled">
                    <h4>Comments</h4>
                    {commentsList}  
                </ul>
            )
        }else{
            return(<div></div>)
        }
    }

    render(){

        if(this.props.dish!=null){
            return(
                <div className="row">
                    <div className="col-12 m-1 col-md-5 text-left">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 m-1 col-md-5 text-left">
                        {this.renderComments(this.props.dish.comments)}
                    </div>    
                </div>
            )
        }else{
            return(<div></div>)
        }
    }

}

export default DishDetail;