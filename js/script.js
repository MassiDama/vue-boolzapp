const { createApp } = Vue;

createApp({
    data() {
        return {

            time: '',
            searchName: "",
            newMex : "",
            activeItem: 0,
            contacts: [
                {
                    name: 'Paul Parker',
                    avatar: './img/avatar.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Dino Zoff',
                    avatar: './img/avatar1.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Giuseppe Bergomi',
                    avatar: './img/avatar2.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luis A. Reyna',
                    avatar: './img/avatar3.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Steve McMahon',
                    avatar: './img/avatar4.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Lothar Matthaus',
                    avatar: './img/avatar5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Jorge L. Burruchaga',
                    avatar: './img/avatar6.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Julius Bielik',
                    avatar: './img/avatar7.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        }
    },
    methods: {
        // Click sul contatto mostra la conversazione del contatto cliccato
        openChat(i) {
            // console.log(i);
            this.activeItem = i;
            console.log(this.time);
        },

        //  Aggiunta di un messaggio
        sentMex() {
            this.contacts[this.activeItem].messages.push(
                {
                    date: '',
                    message: this.newMex,
                    status: 'sent'
                }
            );
            this.newMex = "";

            // Risposta dall’interlocutore
            setTimeout(() => 
                this.contacts[this.activeItem].messages.push(
                    {
                        date: '',
                        message: "Ok",
                        status: 'received'
                    }
                ),
                5000
            );
        },

        // Ricerca utenti: scrivendo qualcosa nell’input a sinistra, 
        // vengono visualizzati solo i contatti il cui nome contiene le lettere inserite 
        includesAvatar() {

            console.log('qua ho provato a filtrare');

            return this.contacts.filter((obj) => obj.name.toUpperCase().includes(this.searchName.toUpperCase()));

            // ho filtrato la lista contatti che soddisfano la condizione di inclusione di searchName su "name" di ogni oggetto obj in contacts
            // uso toUpperCase per farmi diventare le stringhe tutte maiuscole 
            // e assicurarmi che il filtro venga applicato anche se faccio la ricerca sia in maiuscolo e minuscolo (key sensitive)
            
            // obj (contenuto che sta nelle parentesi graffe, nella lista contacts)
            // ho utilizzato questa funzione (che mi ritorna una lista di contatti "filtrati") al posto di contacts nel ciclo v-for "di ogni avatar"
        },
        getTime(date) {

            // ho creato una funzione che dalla stringa di data e ora mi ritorna solo ora e minuti
            // con split separo la data allo slash che così diventa un array
            const parts = date.split("/");

            // inverto giorno e mese perchè nella funzione new Date è ammesso in input solo il formato mese/giorno/anno
            const newDate = parts[1] + "/" + parts[0] + "/" + parts[2];

            // vado a prendere solo ora e minuti con la funzione new Date
            const time = new Date(newDate).getHours() + ":" + new Date(newDate).getMinutes();
            return time;

        }

    },
    mounted() {
        console.log("L'applicazione è caricata!");
        

        }

    
}).mount('#app')