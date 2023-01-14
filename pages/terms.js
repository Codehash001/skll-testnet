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
      
      Terms of Service

Welcome to our Skull Klubs Limit less NFTs! By using our services, you acknowledge that you have read and agree to the following terms and conditions.

1. Definitions

In these Terms, the following words and phrases shall have the following meanings:

a. &apos;NFT&apos; means a non-fungible token, a digital asset that is unique and non-interchangeable with any other asset.

b. &apos;Skull Klubs Limit less NFTs&apos; means the NFT project operated by us.

c. &apos;Services&apos; means any services provided by us related to the NFT Project.

d. &apos;User&apos; means any user of the Services.

2. Acceptance of Terms

By using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use our Services.

3. Changes to the Terms

We may revise these Terms from time to time. If we make any material changes, we will notify you by posting the revised Terms on this page.

By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new terms, you must stop using our Services.

4. Use of Services

You may use our Services only as permitted by law.

You must not misuse our Services. You may not use our Services to engage in any illegal activity, or to violate any applicable laws or regulations.

5. User Content

You are solely responsible for any content you upload, post, or otherwise make available through our Services. You are responsible for ensuring that your content does not infringe the rights of any third party.

We may review user content at our discretion, but we are not obligated to do so. We may remove or modify any user content for any reason.

6. Disclaimer of Warranties

Our Services are provided “as is” and “as available”. We disclaim all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.

7. Limitation of Liability

We will not be liable for any damages arising out of or related to your use of our Services. This includes, but is not limited to, direct, indirect, consequential, special, punitive, and exemplary damages.

8. Governing Law

These Terms shall be governed by and construed in accordance with the laws of [State], without regard to its conflict of law provisions.

9. Contact Us

If you have any questions about these Terms, please contact us at [EMAIL].
      </p>
      </div>
      <Footer/>
    
      <div class="dark:hidden blob w-[800px] h-[800px] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>
    <div class="dark:hidden blob w-[1000px] h-[1000px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-gray-100 to-blue-100"></div>
    <div class="dark:hidden blob w-[600px] h-[600px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-slate-100 via-teal-100 to-blue-100"></div>
    <div class="dark:hidden blob w-[300px] h-[300px] rounded-[999px] absolute bottom-[-10px] left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-200 to-Fuchsia-300"></div>
    </div>
  )
}
