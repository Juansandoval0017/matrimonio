interface Data {

    mongoUrl: string;
    mongoDbName: string;
    mongoCollectionName: string;

}

export const Environment : Data = {
    mongoUrl: 'mongodb+srv://gilgamesh:Rh43u1cp5HDbepGm@cluster.7tphjs9.mongodb.net/',
    mongoDbName: 'puntajes',
    mongoCollectionName: 'puntajes'
}