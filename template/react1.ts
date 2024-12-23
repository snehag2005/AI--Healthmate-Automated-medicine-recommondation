import React, { useRef } from 'react';

function ChangeTextWithRef() {
    const textRef = useRef(null);

    const handleChangeText = () => {
        textRef.current.textContent = 'Welcome in DS';
    };

    return (
        <div>
            <h1 ref={textRef}>Hello</h1>
            <button onClick={handleChangeText}>Change Text</button>
        </div>
    );
}

export default ChangeTextWithRef;
