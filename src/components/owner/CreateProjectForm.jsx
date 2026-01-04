import React from 'react';

import styles from './CreateProjectForm.module.css';

const CreateProjectForm = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Start a New Project</h2>
            <form className={styles.form}>
                <div className={styles.grid}>
                    <div className={styles.formGroup}>
                        <label>Project Title</label>
                        <input type="text" placeholder="e.g. Vacation Home Construction" />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Location</label>
                        <input type="text" placeholder="e.g. 123 Main St, Austin, TX" />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Budget Range</label>
                        <select>
                            <option>Select budget...</option>
                            <option>$100k - $200k</option>
                            <option>$200k - $500k</option>
                            <option>$500k+</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Search Radius (km)</label>
                        <input type="number" placeholder="50" />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label>Project Description & Requirements</label>
                    <textarea rows={4} placeholder="Describe your project details..."></textarea>
                </div>

                <div className={styles.fileUpload}>
                    <p>Upload Site Photos or Documents</p>
                    <input type="file" />
                </div>

                <button type="button" className={styles.submitBtn}>
                    Find Builders
                </button>
            </form>
        </div>
    );
};

export default CreateProjectForm;
