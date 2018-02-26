/**created by panchong on 2018/2/24**/
import React, { Component } from 'react';
import ResizableBox from 'react-resizable'
import Draggable from 'react-draggable';
import store from '../../../store';
import { changeFocus } from '../../../actions/actions';

class TextComponent extends Component{
    handleFocus = e => {
        e.stopPropagation();
        store.dispatch(changeFocus(this.props.item.id));
    };
    handleStart = (e, ui) =>  {
        console.log('Event: ', e);
        console.log('Position: ', ui.position);
    };

    handleDrag = (e, ui) => {
        e.preventDefault();
        console.log('Event: ', e);
        console.log('Position: ', ui.position);
    };

    handleStop = (e, ui) => {
        console.log('Event: ', e);
        console.log('Position: ', ui.position);
    };
    render() {
        const { id, style, content } = this.props.item;
        const { focusId } = this.props;
        const { left, top} = style;
        console.log(id);
        console.log(focusId);
        return (
            <Draggable
                axis="both"
                handle=".textHandle"
                defaultPosition={{x: left, y: top}}
                bounds="parent"
                grid={[1, 1]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className={`textHandle ${id === focusId ? 'focus' : ''}`}
                     style={style}
                     onClick={this.handleFocus}>
                    {content}
                </div>
            </Draggable>
        );
    }
}
export default TextComponent;