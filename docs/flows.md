# User Flows

This document describes the primary user flow for interacting with the application prototype.

## 1. Core User Journey: Exploring a Topic

This flow details the steps a user takes to navigate from the main screen to a specific topic and back.

**Actor:** A general user interested in the essay's content.

**Precondition:** The user has opened `prototype/index.html` in their web browser.

**Flow Steps:**

1.  **System Displays Main View:** The application loads and displays a grid of cards, each representing a major section of the essay (e.g., "Theological Perspectives", "Historical Context").

2.  **User Selects a Section:** The user finds a section of interest and clicks on its corresponding card.

3.  **System Displays Detail View:**
    - The main view is hidden.
    - A new view appears, dedicated to the selected section.
    - This view displays the full title, summary, and detailed content of the section, broken down into sub-headings and paragraphs.
    - A prominent "Back to Overview" button is visible at the top of the view.

4.  **User Reads Content:** The user scrolls through and reads the detailed information provided.

5.  **User Returns to Main View:** The user clicks the "Back to Overview" button.

6.  **System Returns to Main View:**
    - The detail view is hidden.
    - The main view (grid of cards) is displayed again, allowing the user to select another section.

**End of Flow.**