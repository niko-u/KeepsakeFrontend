<template>
    
<div id="contact" class="contact-area section-padding">
    <h1 id="title"><router-link to="/" class="nav-link">Keepsake</router-link></h1>
	<div class="container" id="contactContainer">									
		<div class="section-title text-center">
			<h1>Get in Touch</h1>
			<p>Questions or concerns? Feel free to reach out to us.</p>
		</div>					
		<div class="row">
			<div class="col-lg-7">	
				<div class="contact">
					<form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
						<div class="row">
							<div class="form-group col-md-6">
								<input type="text" name="name" class="form-control" placeholder="Name" required="required">
							</div>
							<div class="form-group col-md-6">
								<input type="email" name="email" class="form-control" placeholder="Email" required="required">
							</div>
							<div class="form-group col-md-12">
								<input type="text" name="subject" class="form-control" placeholder="Subject" required="required">
							</div>
							<div class="form-group col-md-12">
								<textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
							</div>
							<div class="col-md-12 text-center">
								<button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div><!--- END COL --> 
			<div class="col-lg-5">
				<img src="..\assets\KeepsakeLogo.png" alt="" class="imgHolder">				
			</div><!--- END COL --> 
		</div><!--- END ROW -->
	</div><!--- END CONTAINER -->	
</div> 
</template>

<script>

</script>

<style scoped>
body{margin-top:20px;
background:#eee;
}
.contact-area {
    background: url(../img/bg/contact-bg.png) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}

@media only screen and (max-width:768px) {
    .contact {
        margin-bottom: 60px;
    }
}

.contact input {
    background: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #232434;
    font-size: 16px;
    height: 60px;
    padding: 10px;
    width: 100%;
    font-family: 'poppins', sans-serif;
    padding-left: 30px;
    -webkit-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.contact textarea {
    background: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #232434;
    font-size: 16px;
    padding: 10px;
    width: 100%;
    font-family: 'poppins', sans-serif;
    padding-left: 30px;
    -webkit-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.contact input:focus {
    background: #fff;
    border: 1px solid #fff;
    color: #232434;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: 0 none;
}

.contact textarea:focus {
    background: #fff;
    border: 1px solid #fff;
    color: #232434;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: 0 none;
}

.form-control::placeholder {
    color: #232434;
    opacity: 1;
}

.btn-contact-bg {
    border-radius: 30px;
    color: white;
    outline: medium none !important;
    padding: 15px 27px;
    text-transform: capitalize;
    -webkit-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    background: #b7c6e2;
    font-family: 'poppins', sans-serif;
    cursor: pointer;
    width: 100%;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
    margin-top: 10px;
}

.btn-contact-bg:hover,
.btn-contact-bg:focus {
    background: #fbd2d0;
    color: white;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
}

/*START ADDRESS*/

.single_address {
    overflow: hidden;
    margin-bottom: 10px;
    padding-left: 40px;
}

@media only screen and (max-width:768px) {
    .single_address {
        padding-left: 0px;
    }
}

.single_address i {
    background: #f6f6f6;
    color: #7564e5;
    border-radius: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    float: left;
    margin-right: 14px;
    font-size: 22px;
    -webkit-box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    -webkit-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.single_address:hover i {
    background: #7564e5;
    color: #fff;
}

.single_address h4 {
    font-size: 18px;
    margin-bottom: 0px;
    overflow: hidden;
    font-weight: 600;
}

.single_address p {
    overflow: hidden;
    margin-top: 5px;
}

.section-title h1 {
    font-size: 44px;
    font-weight: 500;
    margin-top: 0;
    position: relative;
    text-transform: capitalize;
    margin-bottom: 15px;
}
.section-title p {
    padding: 0 10px;
    width: 70%;
    margin: auto;
    letter-spacing: 1px;
}
.section-title {
    margin-bottom: 60px;
}
.text-center {
    text-align: center!important;
}

#contactContainer {
    background-color: #fff7e0;
    padding: 5%;
    border-radius: 20px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
}

.imgHolder {
    width: 75%;
    padding-bottom: 10%;
}

#contact {
    margin-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
}

.form-group input{
    background-color: white;
    border-radius: 10px;
    margin: 5px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
}

.form-group textarea{
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    margin: 5px;
    
}

#title {
        font-size: 100px;
        margin-bottom: 5%;
}

</style>