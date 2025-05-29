const Loading = () => {
    const loadingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    return (
        <div style={loadingStyle}>
            <div>Loading...</div>
        </div>
    );
};

export default Loading;
