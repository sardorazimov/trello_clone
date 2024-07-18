import {  OrganizationList } from "@clerk/nextjs";


export default  function CreateOrganizationList() {
    return (
        <OrganizationList 
            hidePersonal 
            afterSelectOrganizationUrl={"/organozation/:id"}
            afterCreateOrganizationUrl={"/organozation/:id"}
        />
    )
}