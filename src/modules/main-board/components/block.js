import React from 'react';

const Block = ({content}) => {
    return (
        <div class="block">
            {content.text}
            {
                content.icons.map((icon) => {
                    return (<img style={{ position: 'absolute' }} src={icon} />)
                })
            }
        </div>
    );
};

export default Block;