import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfoComponent extends Component {
    renderCampsite(campsite){
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )

    }


    renderComments(comments){
        if(comments){
            return (
                <div className="col-md-5 m-1">
                    <h4>comments</h4>
                    {
                        comments.map( comment => {
                            return (
                                <div key={comment.id}>
                                <p>
                                    {comment.text}<br/>
                                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                    </p>
                            </div>    
                            )
                        })
                    }
                </div>
            )
        }
    }


    render(){
        if(this.props.campsite){
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            )
        }
        return (
            <div />
        )
    }
}

export default CampsiteInfoComponent;