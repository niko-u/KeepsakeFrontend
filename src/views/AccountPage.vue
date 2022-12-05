<template>
    <div v-if="!editing" id="page" class="container rounded bg-white mt-5 mb-5">
        <div class="block">
            <h1 id="welcome">Hello {{user.firstName}}!</h1>
            <div class="row" id="accountContainer">

                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img :src="user.profilePic" class="rounded-circle mt-5" id="pfp">

                        <span> </span>
                    </div>
                </div>
                <div class="col-md-5 border-right" id="userAccount">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Account Settings</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6"><label class="labels">First Name</label><input :value="user.firstName" type="text" class="form-control" placeholder="first name" onfocus="this.blur();" readonly></div>
                            <div class="col-md-6"><label class="labels">Last Name</label><input :value="user.lastName" type="text" class="form-control"  placeholder="last name" onfocus="this.blur();" readonly></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels">Phone Number</label><input :value="user.phone" type="text" class="form-control" placeholder="714-111-1111" onfocus="this.blur();" readonly></div>
                            <div class="col-md-12"><label class="labels">Email</label><input :value="user.email" type="text" class="form-control" placeholder="superfrog@tcu.edu" onfocus="this.blur();" readonly></div>
                        </div>
                        <div class="row mt-3">
                        </div>
                        <div class="mt-5 text-center">
                            <button @click="edit()" class="btn profile-button" type="button">Edit Account</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else id="page" class="container rounded bg-white mt-5 mb-5">
        <div class="block">
            <h1 id="welcome">Hello {{user.firstName}}!</h1>
            <div class="row" id="accountContainer">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img :src="user.profilePic" class="rounded-circle mt-5" id="pfp">
                    
                    <span> </span>
                </div>
            </div>
            <div class="col-md-5 border-right" id="userAccount">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Account Settings</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><label class="labels">First Name</label><input :value="user.firstName" type="text" class="form-control" placeholder="first name" ></div>
                        <div class="col-md-6"><label class="labels">Last Name</label><input :value="user.lastName" type="text" class="form-control"  placeholder="last name"></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">Phone Number</label><input v-model="user.phone" type="text" class="form-control" placeholder="714-111-1111" ></div>
                        <div class="col-md-12"><label class="labels">Email</label><input v-model="user.email" type="text" class="form-control" placeholder="superfrog@tcu.edu"></div>
                    </div>
                    <div class="row mt-3">
                    </div>
                    <div class="mt-5 text-center">
                        <button @click="edit()" class="btn profile-button" type="button">Save</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </template>
    
    <script>
        export default {
            data() {
                return {
                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    profilePic: ""
                },
                editing: false
                };
            },
            async mounted() {
                this.getAccountData();
            },
            methods: {
                async updateAccount() {
                    fetch("https://api.jelylabs.com/proxy/user/6369452ad0a2e7693379c294", {
                        method: "PUT",
                        headers: {'Content-Type': 'application/json'}, 
                        body: JSON.stringify(this.user)
                    }).then(res => {
                        console.log("Request complete! response:", res);
                    });
                },
                async getAccountData() {
                    fetch('https://api.jelylabs.com/proxy/user/6369452ad0a2e7693379c294')
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        this.user.firstName = data.firstName;
                        this.user.lastName = data.lastName;
                        this.user.email = data.email;
                        this.user.profilePic = data.profilePicUrl;
                        console.log(this.user.profilePic)
                    })
                },
                async edit() {
                    if (this.editing) {
                        await this.updateAccount();
                        this.editing = false;
                    } else {
                        this.editing = true;
                    }
                }
            },
    };
    </script>
    
    <style>
    
    .profile-button {
        background-color: #fbd2d0;
        box-shadow: none;
        border: none;
        color: black;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
    }

    .profile-button:hover {
        background-color: #fbd2d0;
        box-shadow: none;
        border: none;
        color: black;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
    }
    
    
    .labels {
        font-size: 11px
    }

    #page {
        width: 100%;
    }

    #accountContainer {
        background-color: #fff7e0;
        border-radius: 20px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        
    }

    .block {
        margin-top: 15%;
        margin-right: 10%;
        margin-left: 10%;
    }

    #pfp {
        width: 100%;
        height: 100%;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
        margin-left: 50%;
    }


    #welcome {
        font-size: 75px;
        margin-bottom: 3%;
        
    }

    #userAccount {
        margin-left: 10%;
    }

    
    </style>