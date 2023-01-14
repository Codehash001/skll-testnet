import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'



export default function Home() {
  return (
    <div>
      <Head>
        <title>SKLL</title>
        <meta name="Description" content="Skulls Klubs LimitLess!" />
        <link rel="icon" href="/Logoicon.png" />
      </Head>
      <div className='text-sm font-Archivo md:mx-8 mx-3'>
      
      <p>
      Privacy Policy<br/><br/>

We at &apos;Skull Klubs Limitless&apos; take our users&apos; privacy very seriously. We understand that the data we collect and process is personal to our users and we are committed to protecting and safeguarding this information. This Privacy Policy explains how we collect, use, share, and protect the data of our users.<br/><br/>

Collection of Data<br/><br/>

We collect data from our users in several ways, including when they register an account, create a profile, interact with our services, and visit our website. We may collect data such as names, email addresses, phone numbers, physical addresses, and payment information. We may also collect data about the usage of our services, such as the features used, the content viewed, and the time spent on our services.<br/><br/>

Use of Data<br/><br/>

We use the data we collect from our users to provide and improve our services, to communicate with our users, and to protect our users from fraud and abuse. We may use the data to personalize content and tailor our services to our users’ preferences. We may also use the data for analytics and research purposes.<br/><br/>

Sharing of Data<br/><br/>

We may share data with third parties in order to provide our services. We may share data with service providers who process data on our behalf. We may also share data with partners who may use the data to offer our users additional services. We do not sell or rent data to third parties.<br/><br/>

Data Security<br/><br/>

We use industry-standard measures to safeguard the data we collect from our users. We employ encryption, firewalls, and other security measures to protect the data from unauthorized access. We also take steps to ensure that the data is stored securely and is only used for the purposes it was collected for.<br/><br/>

Your Rights<br/><br/>

We provide our users with the right to access, update, and delete their data. You may also have the right to object to our processing of your data, or to request that your data is exported in a machine-readable format. You may exercise these rights by contacting us.<br/><br/>

Changes to This Privacy Policy<br/><br/>

We may update this Privacy Policy from time to time. We will notify our users of any changes by posting an updated version of the Privacy Policy on our website. We encourage our users to review this Privacy Policy periodically.<br/><br/>

Contact Us<br/><br/>

If you have any questions or concerns about our Privacy Policy, please contact us at [email address].
      </p>
      
      <Footer/>
      </div>
    
      <div class="dark:hidden blob w-[800px] h-[800px] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>
    <div class="dark:hidden blob w-[1000px] h-[1000px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-gray-100 to-blue-100"></div>
    <div class="dark:hidden blob w-[600px] h-[600px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-slate-100 via-teal-100 to-blue-100"></div>
    <div class="dark:hidden blob w-[300px] h-[300px] rounded-[999px] absolute bottom-[-10px] left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-200 to-Fuchsia-300"></div>
    </div>
  )
}
