<!-- <template>
    <div>
      <form>
        <label>Enter OTP:</label>
        <input type="tel" id="otp" maxlength="4" pattern="[0-9]*" inputmode="numeric" v-model="otp">
        <div v-if="!validOTP" class="error">Please enter a valid 4-digit OTP</div>
        <button type="submit" v-on:click.prevent="submitOTP">Submit</button>
        <a href="#" v-on:click.prevent="resendOTP">Resend OTP</a>
        <a href="#" v-on:click.prevent="changeNumber">Change Number</a>
      </form>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          otp: '',
          mobileNumber: ''
        }
      },
      computed: {
        validOTP() {
          return this.otp.length === 4 && /^[0-9]{4}$/.test(this.otp)
        }
      },
      methods: {
        submitOTP() {
          if (!this.validOTP) {
            return
          }
          this.showLoadingIndicator()
          setTimeout(() => {
            this.showThankYouPage()
          }, 5000)
        },
        resendOTP() {
          // resend OTP logic
        },
        changeNumber() {
          // change number logic
        },
        showLoadingIndicator() {
          // show loading indicator
        },
        showThankYouPage() {
          // show thank you page
        }
      }
    }
  </script>
<style>
/* Form styles */
form {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}

label {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  font-size: 1.2rem;
  width: 100%;
  margin-bottom: 1rem;
}

.error {
  color: red;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

/* Button styles */
button {
  background-color: #3498db;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  border: none;
  font-size: 1.2rem;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #2980b9;
  cursor: pointer;
}

/* Neon effect */
button {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177, 0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
}

/* Classy background */
body {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

</style>   -->