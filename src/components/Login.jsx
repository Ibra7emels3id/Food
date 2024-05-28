

function createEmailLinkFlow(): {
    startEmailLinkFlow: (params: SignInStartEmailLinkFlowParams) => Promise<SignIn>,
    cancelEmailLinkFlow: () => void
}

export default createEmailLinkFlow;