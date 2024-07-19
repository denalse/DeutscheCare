import React, { useEffect } from 'react';
import { Alert, Button } from 'reactstrap';

function AlertExample(props) {

    const onDismiss = () => {
        props.setVisible(false)
    };

    useEffect(() => {
        if (props.visible === true) {
            const audio = new Audio("http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg");
            audio.play();
        }
    }, [props.visible]);

    /* TODO
    */
    const Alerts = (props) => {
        if ( props && props.contents!= undefined ) {
            props.contents.forEach(element => {
                return (<Alert key="element" color={props.color} isOpen={props.visible}>
                    {element} &nbsp;&nbsp;
                    <Button color="danger" onClick={onDismiss}>Snooze</Button> &nbsp;&nbsp;
                    <Button color="success" onClick={onDismiss}>Done</Button>
                </Alert>);
            })
        } else{
            return;
        };
    }
    
    return (  
        // <Alerts {...props} />   
        <Alert color={props.color} isOpen={props.visible}>
                    {props.contents} &nbsp;&nbsp;
                    <Button color="danger" onClick={onDismiss}>Snooze</Button> &nbsp;&nbsp;
                    <Button color="success" onClick={onDismiss}>Done</Button>
                </Alert>
        );
}

export default AlertExample;