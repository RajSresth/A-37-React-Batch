

const List = () => {

    const isLogin = false;

    return  <>
            { isLogin ? <h2>Welcome User</h2>: <h2>Please Login</h2>}
    </>
}

export default List;