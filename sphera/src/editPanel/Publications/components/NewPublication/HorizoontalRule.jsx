import React from 'react';

export function HorizontalRule() {
    return <div style={{width: '100%', borderBottom: '1px solid rgba(45, 55, 72, 0.2)'}}></div>;
}

export function InnerHorizontalRule() {
    return (
        <div 
            style={{
                width: '100%',
                borderBottom: '1px solid rgba(45, 55, 72, 0.2)',
                marginRight: '32px',
            }}>
        </div>
    );
}