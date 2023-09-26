interface AuthProps {}

type AuthReturn = {
    login: (props: {
        username: string;
        email: string;
        password: string;
    }) => void;
    register: (props: {}) => void;
    canAuthorized: (props: {}) => boolean;
};

function useAuth(): AuthReturn {
    const login: (props: {
        username: string;
        email: string;
        password: string;
    }) => void = function (props) {
        return;
    };

    const register: (props: {}) => void = function (props) {
        return;
    };

    const canAuthorized: (props: {}) => boolean = function (props) {
        return true;
    };

    return {
        login,
        register,
        canAuthorized,
    };
}

export default useAuth;
