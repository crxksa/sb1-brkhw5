interface DeploymentStatus {
  status: string;
  url?: string;
  claim_url?: string;
  claimed?: boolean;
}

declare global {
  interface Window {
    antml: {
      getDeploymentStatus: (params: { id?: string }) => Promise<DeploymentStatus>;
    }
  }
}

export const getDeploymentStatus = async ({ id = '' }: { id?: string }): Promise<DeploymentStatus> => {
  if (typeof window === 'undefined' || !window.antml?.getDeploymentStatus) {
    return { status: '' };
  }

  try {
    const response = await window.antml.getDeploymentStatus({ id });
    return response;
  } catch (error) {
    console.error('Error getting deployment status:', error);
    return { status: '' };
  }
};