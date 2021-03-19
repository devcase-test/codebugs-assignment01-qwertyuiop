import { JoeFriends, JoeFriendDetails } from './mocks';

interface Friend {
    id: string;
    name: string;
    surname: string;
}

interface FriendDetails extends Friend {
    friendsCount: number;
}

export const getJoeFriends = async (): Promise<Friend[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(JoeFriends);
        }, 1000);
    });
};

export const getJoeFriendDetails = async (
    id: string
): Promise<FriendDetails> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const friend = JoeFriendDetails.find((i) => i.id === id);
            friend === undefined ? reject() : resolve(friend);
        }, 1000);
    });
};
