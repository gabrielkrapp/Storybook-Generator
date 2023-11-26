import { execSync } from "child_process";

export const getVersion = () => {
    try {
      const lastTagCommitHash = execSync('git rev-list --tags --max-count=1').toString().trim();
      const lastTag = execSync(`git describe --tags ${lastTagCommitHash}`).toString().trim();
      
      return lastTag;
    } catch (error) {
      console.error('Unable to get Git version:', error);
      return '1.0.0';
    }
}