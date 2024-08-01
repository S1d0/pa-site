import {policy} from "@/app/privacy-policy/policy";


export default function PrivacyPolicyPage() {
    return (
        <main className="">
            <h1>Polityka prywatności</h1>
            <p>
                {policy}
            </p>
        </main>
    );
}