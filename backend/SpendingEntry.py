"""
This class will contain the spending entry data model.
"""

class SpendingEntry:
    
    def __init__(self, amount, category, date, description=""):
        self.amount = amount
        self.category = category
        self.date = date
        self.description = description
    