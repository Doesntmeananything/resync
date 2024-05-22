type ResyncClient = {
    id: string;
};

export const createClient = (): ResyncClient => {
    return {
        id: "test-id",
    };
};
