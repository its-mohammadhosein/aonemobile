import React from 'react';
import AppetizerAndSalads from "@/components/menu-sections/AppetizerAndSalads";

function Page(props) {
    return (
        <>
        <div>
            {/*<h1>menu Top bar</h1>*/}
        </div>
<div className={' min-h-[100vh] '} id={'wholemenu'}>
    <AppetizerAndSalads/>
</div>
        </>
    );
}

export default Page;