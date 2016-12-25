import React from 'react';

const Block = ({content}) => {
    return (
        <div class="block">
            {content.text}
            {
                content.icons.map((icon, index) => {
                    let style = { position: 'absolute' }
                    if (index == 1) {
                        style.top = '50%'
                    }
                    return (<img key={index} style={style} src={icon} />)
                })
            }
        </div>
    );
};

export default Block;