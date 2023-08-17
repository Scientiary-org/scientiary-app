import Moralis from 'moralis';

export default class IPFSService {
    async uploadToIpfs(file: File) {

        const reader = new FileReader();

        return new Promise<string>(async (resolve, reject) => {
            reader.onloadend = async () => {
                const content = reader.result as string;
                const base64Content = content.split(',')[1];

                const fileUpload = {
                    path: file.name,
                    content: base64Content,
                };

                try {
                    const res = await Moralis.EvmApi.ipfs.uploadFolder({
                        abi: [fileUpload],
                    });

                    console.log(res.result);

                    resolve(res.result[0].path); // Returning the IPFS hash
                } catch (error) {
                    console.error('Error uploading to IPFS:', error);
                    reject(error);
                }
            };

            reader.onerror = (event) => {
                reject(new Error(`File read error: ${event.target?.error}`));
            };

            reader.readAsDataURL(file);
        });
    }
}


