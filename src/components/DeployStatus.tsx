import { useState, useEffect } from 'react';
import { getDeploymentStatus } from '../utils/deployment';

const DeployStatus = () => {
  const [status, setStatus] = useState('');
  const [url, setUrl] = useState('');
  const [claimUrl, setClaimUrl] = useState('');
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const data = await getDeploymentStatus({});
        setStatus(data.status);
        if (data.url) setUrl(data.url);
        if (data.claim_url) setClaimUrl(data.claim_url);
        if (data.claimed !== undefined) setClaimed(data.claimed);
      } catch (error) {
        console.error('Error checking deployment status:', error);
      }
    };

    // Initial check
    checkStatus();

    // Only set up polling if we're actually deploying
    if (status && status !== 'ready') {
      const interval = setInterval(checkStatus, 5000);
      return () => clearInterval(interval);
    }
  }, [status]);

  if (!status) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm">
      <p className="text-sm">
        Deployment Status: 
        <span className={`ml-2 font-semibold ${
          status === 'ready' ? 'text-green-500' : 'text-yellow-500'
        }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </p>
      {url && (
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:text-blue-600 mt-2 block"
        >
          View Site
        </a>
      )}
      {claimUrl && !claimed && (
        <a 
          href={claimUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:text-blue-600 mt-2 block"
        >
          Claim Site
        </a>
      )}
    </div>
  );
};

export default DeployStatus;