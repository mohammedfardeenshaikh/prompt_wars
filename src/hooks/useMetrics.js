import { useCallback } from 'react';
import { trackEvent, cloudLog } from '../services/googleCloud';

/**
 * Custom Hook: useMetrics
 * Provides standardized methods for tracking UI performance and interactions
 * following Google's recommended "Mature" patterns.
 */
export const useMetrics = (componentName) => {
  
  const logInteraction = useCallback((action, data = {}) => {
    cloudLog(`${componentName}: ${action}`, 'INFO', {
      action,
      ...data,
      component: componentName
    });
    
    trackEvent(`ui_interaction_${action.toLowerCase().replace(/\s+/g, '_')}`, {
      component: componentName,
      ...data
    });
  }, [componentName]);

  const logPageLoad = useCallback(() => {
    trackEvent('page_view', {
      page_title: componentName,
      page_location: window.location.href
    });
    cloudLog(`Page View: ${componentName}`, 'INFO');
  }, [componentName]);

  const logAppError = useCallback((error, fatal = false) => {
    cloudLog(`Error in ${componentName}: ${error.message}`, fatal ? 'CRITICAL' : 'ERROR', {
      error: error.stack,
      fatal
    });
  }, [componentName]);

  return {
    logInteraction,
    logPageLoad,
    logAppError
  };
};
