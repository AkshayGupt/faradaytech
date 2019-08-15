import React , {Component} from 'react';
import {Card,CardTitle,CardBody,CardImg,CardImgOverlay,CardText} from 'reactstrap';


class Dishdetail extends Component{

    constructor(props){
        super(props);

    };


    displayComments(comment){
        return(
            <div>
                
        <p>{comment.comment}</p>
        <p>-- {comment.author} , {comment.date}</p>
        </div>
        );
    }

    render(){
        const dish=this.props.selectedDish;
        if(dish!=null)
        {
        return(
            <div className="row">
            <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image}/>
                      
                        <CardBody>
                        <CardTitle>
                       <h5> {dish.name} </h5>
                        </CardTitle>
                            {dish.description}
                        </CardBody>
                    </Card>
            </div>
            <div className="col-12 col-md-5 ">
            <h4>Comments</h4>
                {dish.comments.map((comment)=>this.displayComments(comment))}
            </div>
            </div>
        );
        }
        else
        {
            return(
            <div></div>
            );
        }
    }
}

export default Dishdetail;